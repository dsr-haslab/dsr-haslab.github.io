---
layout: tool
title: d'Artagnan
description: Vision of a Trusted Database on Untrusted Clouds
---


<br>
<img src="{{ site.url }}{{ site.baseurl }}/images/dartagnan/logo.png" class="img-responsive" width="40%" style="display: block; margin-left: auto;margin-right: auto;" />
## Summary

**d'Artagnan** is a multi-cloud, multi-party database that processes queries by leveraging secure multi-party computation (SMPC) protocols. The goal of this project is to move away from the state-of-the-art privacy-aware databases built with the assumption that the leakage associated to property-preserving (PPT) schemes is acceptable. We envision a class of future databases that prioritize user's confidentiality above all else while still being able to process any query with an acceptable overhead. **d'Artagnan** gives the first step towards this future with a novel architecture designed to:

* **Encrypt Data in Secrets** - Data is encrypted with *secret sharing* schemes, where each share reveals nothing about the plaintext values.

* **Distribute Trust between Multiple-Clouds** - Secrets are stored in databases hosted on independent cloud providers. No cloud has enough information to disclose the plaintext values.

* **Process Queries with secure SMPC protocols** - For any query to be processed, the databases have to coordinate and communicate to evaluate an SMPC protocol.


<span>
<i class="fab fa-github fa-lg"></i><span> We developed a system prototype available at [GitHub](https://github.com/d-artagnan-db). The prototype supports HBase as the underlying database to store data and a state-of-the-art SMPC protocol. A detailed description on how to deploy the prototype can be found at the end of the page in the deployment section.


## Description

From the client’s perspective, the database is a single NoSQL database deployment. However, the real system is composed of multiple clouds that plays the role of a computing party in an SMPC protocol. Each party can host an autonomous distributed database that can scale and grow without any knowledge of the remaining parties. It's **important** to understand that the databases hosted at each cloud are separate systems that share no state. In a *3*-party system, one cloud can host Amazon's Dynamo DB, another host Google's BigTable and the final one host Azure cosmos DB.

In essence, d’Artagnan deviates from existing database architectures and tackles the challenge of creating a single secure logical database that processes SMPC protocols in a dynamic environment where each party is an autonomous database that scales and grows. All this is accomplished in face of a malicious active adversary.

## Architecture

The system operates across a *trusted domain* and an *untrusted domain*. The *trusted domain* is where the client application resides and where data is encrypted before being outsourced to the clouds. The *untrusted domain* contains the databases hosted at different database providers, each hosting the d'Artagnan components that enable each database to communicate and play the role of a party in an SMPC protocols.

<br>
<img src="{{ site.url }}{{ site.baseurl }}/images/dartagnan/arch1.png" class="img-responsive" width="50%" style="display: block; margin-left: auto;margin-right: auto;" />
<br>


**SafeClient** is a proxy between the user's plaintext request and the logical NoSQL database. It transforms plaintext queries into secure queries sent in parallel to the databases on the cloud providers. Each request carries a single share of a sensitive value that is used to by the **SafeServer**.

**SafeServer** is a distributed component, hosted in every cloud that coordinates every other system component to work together and create a logical NoSQL database. Its objective is to store and retrieve data on the underlying database hosted on the local cloud and evaluate SMPC protocols. The SafeServer nodes don't share any global state between the nodes but leverages the **Multi-party Library** to process client's requests when necessary.

The **Multi-Party Library** provides a high-level API of SMPC protocols that the **SafeServer** uses to process queries. The library is designed to abstract the details of the protocol's implementation from the **SafeServer** and database context from the protocols. This approach also enables the integration of new protocols without that have no concept of a database and how queries are processed.

The **Network-Middleware** and **Discovery Service** are two distinct network components that support the database's computing components communication and enable each party on a protocol execution to exchange shares. These two components abstract how communications are set up between the parties and ensure that shares are always correctly sent and received by the computing parties.

Finally, the underlying **NoSQL databases** can be any key-value databases that supports essential operations for storing, retrieving and processing data in a table. Each cloud can have a different database system to ensure that a security vulnerability in one database does not compromise the entire system.

## Deployment

To deploy the system's prototype, it's necessary to have a basic understanding of Java and [HBase](https://hbase.apache.org/book.html). HBase is the open-source implementation of Google's [BigTable](https://cloud.google.com/bigtable/) key-value database. This system is designed to scale horizontally with an increasing workload and is suitable for any application that does require strong consistency guarantees. 

Besides the components presented in the high-level architecture, the open-source prototype has some additional internal packages:

* **TestingUtils** - Testing utilities to set-up in-memory clusters for development and testing.

* **HBaseInterfaces** - An extension of HTables interface to support additional operators.

* **ProtoCom** - Generated code from protocol buffers file that serializes the messages exchanged between the parties.

* **SafeMapper** - Library that abstracts the database schema and manages the user's security requirements. 

These packages are internal libraries used to support the main **d'Artagnan** components. Every system component is implemented in Java as a [maven](https://maven.apache.org) project. Thus, every package can be installed on the system with the following command:

<code>
	mvn install -DskipTests
</code>

However, it's important to note that some components depend on others and a build order must be respected. Since  packages are currently not available in a public maven repository, the first components that must be install are the *TestingUtils*, *HBaseInterfaces*, *ProtoCom* and *SafeMapper*. Next, the *SMPC* library has to be installed as both the *SafeClient* and *SafeServer* depend on it. *SafeServer* can be installed next and only then the *SafeClient*. The *SafeClient* has to be the last package has it depends on every other component. It requires the SafeServer to run unit tests an check if the HBase's operation semantics are respected by the secure operators.
The only missing component on the repository is the *DiscoveryService*, however, in the prototype we use a [Redis](https://redis.io) Database which the *SafeSever*s use to find each-other.

Once every component is installed and *Jars* packages are generated they can be installed as any other Java Library. The *SafeServer* is implemented as an HBase co-processor that intercepts the client's requests on the multiple machines. Installing the co-processor is done as described on the HBase documentation but requires a few additional configurations on the HBase site. Each HBase Region server that is part of **d'Artagnan** must have a **SafeServer** coprocessor and add additional configurations to the `hbase-site.xml` site to specify the IP address of the **Discovery Service** and an additional schema file. The schema file specifies which security guarantees must be used to process data of a specific database tables or column. Examples of these configurations can be found on the **SafeServer** testing resources.

**SafeClient** implements the `HTableInterface` in a `SharedTable` class. This class can be used by any applications instead of a standard `HTable` and immediately enables the application to securely process queries as if it was using a normal HBase deployment. The only additional modification is the addition of a few properties to the `HBase-site.xml` specifying the zookeeper quorums of the underlying databases and the schema file identical to the **SafeServer**. Example configurations can be found on the source resources folder.

For any question please do not hesitate to send an email.


# Contacts

* [Rogério Pontes](https://github.com/rogerioacp)



