const kafka = require('kafka-node');

const HighLevelProducer = kafka.HighLevelProducer;
const Client = kafka.Client;

const client = new Client('localhost:2181', 'simpleProducer-id', {
    sessionTimeout: 300,
    spinDelay: 100,
    retries: 2
});

// For this demo we just log client errors to the console.
client.on('error', function (error) {
    console.error(error);
});

var producer = new HighLevelProducer(client);

producer.on('ready', function () {
    // Create a new payload
    var payload = [
        {
            topic: 'hackday',
            messages: JSON.stringify({
                content: 'something New'
            }),
            attributes: 1 /* Use GZip compression for the payload */
        }
    ];

    // Send payload to Kafka and log result/error
    producer.send(payload, function (error, result) {
        console.info('Sent payload to Kafka: ', payload);
        if (error) {
            console.error(error);
        } else {
            const formattedResult = result[0];
            console.log('result: ', formattedResult);
        }
        process.exit();
    });
});
