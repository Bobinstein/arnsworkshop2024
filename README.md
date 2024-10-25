# What is ArNS

The Arweave Name System (ArNS) allows you to assign a friendly name to data on the Arweave blockweave. This allows quick and easy access to data without needing long, ugly and hard to read or share Arweave transaction Ids.

ArNS differs from ENS in that ENS is designed to act as a wallet's identity. You can use an ENS name in place of your wallet address in any app that supports it. ArNS names do not reference a wallet address ***yet***, instead, they reference data stored on Arweave. They are accessed as a subdomain of any ar.io gateway that supports ArNS resolution, which is the vast majority of them.

ArNS doesn't care what kind of data the name is being assigned to, you can use a simple image:

i-bough-a-potato.arweave.net

a video:

look-at-my-potato.g8way.io

or an Arweave manifest representing an entire permanently deployed website:

blackjack.vevivofficial.xyz

or anything else in between.

As you can see, I used different gateways for each of the above examples. One of the greatest features of ArNS is that it can be used with any gateway interchangeably, and we currently have 240 different gateways in the ar.io network, plus who knows how many that are running but not in the network.

ArNS is powered by 2 primary components:

1. The ar.io AO contract contains a list of all active names, and the Ids of the Arweave Name Tokens (ANTs) that control each individual name.
2. ANTs are AO tokens that control each ArNS name. They hold the list of records for the name as well as its owner and controller information.

A record is the pairing of an ArNS name or undername and the Arweave transaction Id that it is pointed at. An ANT controls the record for the primary target, represented by an "@", and the targets of all undernames for that name.

An undername is a subdomain of an ArNS name, and is separated by an underscore. For example in the ArNS name:

arns_bobinstein.arweave.net

`arns` is the undername of the primary, or top level, ArNS name `bobinstein`.

An ArNS name initially supports 10 undernames, and you can purchase space for additional undernames. The cost of increasing undername support depends on the character length of the name and the purchase type, i.e. lease vs. permabuy. 

The easiest way to view and purchase ArNS names is via arns.app, but you can also interact with them using the ar.io sdk. Anyone who is participating in the ar.io bounty but does not have an ArNS name can request one from the ar.io team in our Discord. Have some work ready to show that you are actually working on the bounty, and use the secret code word `toodles`. You will receive a leased name, not a permabuy, and there will be a minimum character length for the name. Shorter names cost more. Also be aware that our team is primarily US based, so responses will be slow on weekends and outside of American business hours.