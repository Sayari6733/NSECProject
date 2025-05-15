// import userModel from "../models/userModel.js";


// export const getUserData =async (req, res)=>{
//     try{

//         const {userId} = req.body;

//         const user = await userModel.findById(userId);

//         if(!user){
//             return res.json({ success: false,message: 'User not found' });
//         }

//         res.json({
//             success: true,
//             userData: {
//                 name: user.name,
//                 isAccountVerified: user.isAccountVerified
//             }
//         });


//     } catch(error){
//         res.json({ success: false, message: error.message });
//     }
// }





import userModel from "../models/userModel.js";

export const getUserData = async (req, res) => {
  try {
    const userId = req.user?.id; // ✅ Get userId from req.user

    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized: No user ID" });
    }

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      userData: {
        name: user.name,
        isAccountVerified: user.isAccountVerified,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
