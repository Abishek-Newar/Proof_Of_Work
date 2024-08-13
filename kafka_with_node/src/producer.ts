import { Kafka, Partitioners } from "kafkajs";

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
})

const producer = kafka.producer()
const run = async()=>{
    await producer.connect()
    await producer.send({
        topic: 'paymetns',
        messages: [
            {value: "hello from kafka producer in node"}
        ]
    })
}

run().catch(console.error)