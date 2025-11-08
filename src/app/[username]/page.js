  
import PaymentPage from "@/components/PaymentPage";
import {notFound} from "next/navigation"
import connectDB from "../db/connectDb";
import User from "@/models/User";


const Username =  async ({ params }) => {
  
  // if the username is not present in the database show a 404 page
  const checkUser = async () => {
    await connectDB()
    let u = await User.findOne({username:params.username})
    if(!u){
      return notFound();
    }
  }
 
 await  checkUser();
  

  return (
   <>
   <PaymentPage username={params.username}></PaymentPage>
   </>
  );
};

export default Username;

// dynamic metadata
// the function should be genrateMetadata
export async function generateMetadata ({params}) {
  return {
    title:`${params.username} - Get me a Chai`
  }
}
