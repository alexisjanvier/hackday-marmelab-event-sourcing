const kafka = require('kafka-node');

const HighLevelConsumer = kafka.HighLevelConsumer;
const Client = kafka.Client;

const client = new Client('localhost:2181');
const topics = [
    {
        topic: 'hackday'
    }
];

var options = {
    autoCommit: true,
    fetchMaxWaitMs: 1000,
    fetchMaxBytes: 1024 * 1024,
    encoding: 'utf8'
};

var consumer = new HighLevelConsumer(client, topics, options);

consumer.on('message', function (message) {
    console.log(message);
});

consumer.on('error', function (err) {
    console.log('error', err);
});

process.on('SIGINT', function () {
    consumer.close(true, function () {
        process.exit();
    });
});

// bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic hackday --from-beginning
