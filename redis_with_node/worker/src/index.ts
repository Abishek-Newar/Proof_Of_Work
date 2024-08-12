import { createClient } from "redis";
const client = createClient();





async function processSubmission(submiision: any){
    const body = JSON.parse(submiision)

    console.log(body);


    await new Promise((resolve)=>setTimeout(resolve,1000));
    console.log(`finished processing ${body}`)
}


async function startWorker() {
    try {
        await client.connect();
        console.log("Worker connected")

        while(true){
            try {
                const submission = await client.brPop("submissions",0);
                console.log(typeof(submission))
                // @ts-ignore
                await processSubmission(submission.element);
            } catch (error) {
                console.log("error while submission",error)
            }
        }
    } catch (error) {
        console.error("error ehile starting code",error)
    }
}
startWorker()