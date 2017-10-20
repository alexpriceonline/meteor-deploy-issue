# meteor-deploy-issue
This repo replicates the deployment issue I get when deploying to AWS using [`mup`](https://github.com/zodern/meteor-up) (v1.3.4 ~ latest)

After a successful `$ mup setup`, I run `$ mup deploy` and get this output:

```
alexprice :: Projects/populous/meteor-deploy-issue » mup deploy
Building App Bundle Locally

Started TaskList: Pushing Meteor App
[52.211.30.162] - Pushing Meteor App Bundle to The Server
[52.211.30.162] - Pushing Meteor App Bundle to The Server: SUCCESS
[52.211.30.162] - Prepare Bundle
[52.211.30.162] x Prepare Bundle: FAILED

        -----------------------------------STDERR-----------------------------------
        Error response from daemon: No such container: meteor-deploy-issue
        tar: Malformed extended header: missing newline
        tar: Exiting with failure status due to previous errors
        -----------------------------------STDOUT-----------------------------------
        node-4.8.4-base: Pulling from abernix/meteord
        Digest: sha256:b77c06e918d75e313167ac7aaf123407eeb424136fba528cbdcfcb7ff1be65bb
        Status: Image is up to date for abernix/meteord:node-4.8.4-base
        ----------------------------------------------------------------------------
```

The main line being:

```tar: Malformed extended header: missing newline```

A quick Google finds [this](https://github.com/mafintosh/tar-fs/issues/21) issue with the `tar-fs` package.

This repo has the exact npm dependencies from my production application and apprently somewhere there is a filename
with non-ascii characters. I've tried a few commands to see if I can find filenames with bad chars in. but had no success.

## Replicate issue

```
$ git clone git@github.com:alexpriceonline/meteor-deploy-issue.git
$ cd meteor-deploy-issue
```

Change the `./mup.js`, `server.one`s `host`, `username` and `pem` properties to that of a server you have deploy access too.

Make sure you have [`mup`](https://github.com/zodern/meteor-up) installed (`yarn global add mup`).

```
$ mup setup
$ mup deploy
```
