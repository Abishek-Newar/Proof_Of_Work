import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider ({
            name: "email",
            credentials: {
                username: {label: 'email',type:"text", placeholder: 'Email'},
                password: { label: 'password', type: "text",placeholder:"Password"},
            },
            async authorize(credentials: any){
                console.log(credentials)
               
                return {
                    id: 'user1',
                    name: "Abishek",
                    email: "abi@gmail.com"
                };
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        jwt: async({user,token})=>{
            if(user){
                token.uid = user.id
            }
            return token
        },
        session: ({session,token,user}:any) =>{
            if(session.user){
                session.user.id = token.uid
            }
            return session
        }
    }
});

export const GET = handler
export const POST = handler