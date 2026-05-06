import bcrypt from 'bcrypt';
import Candidate from '../models/candidateModel.js';
import Recruiter from '../models/recruiterModel.js';
import { Transport } from '../config/email.js';
export const recruiterLogin=async(req,resp)=>{
    try{
        const{email,password}=req.body
        const user= await Recruiter.findOne({email:email})
         if (!user){
            return resp.redirect("/recruiter/login?error=Invalid password or Email");
        }
        const name=user.name
        if(!await bcrypt.compare(password,user.password)){
         return resp.redirect("/recruiter/login?error=Invalid password or Email");
        }else{
        req.session.Rid=user._id;
        req.session.email=email;
        try{
         await Transport.sendMail({
            from:'Anuj Chaudhary',
            to:email,
            subject:'welcome',
            text:`Welcome Back ${name}`
         })
        }catch(error){
        return resp.redirect("/recruiter/login?error=Email Is Not Valid"); 

        }
        resp.redirect("/Rdashboard")
        }
    }catch(error){
        console.log(error)
        resp.status(500).send("there are some internal error")
    }
};
export const recruiterRegister=async(req,resp)=>{
    try{
        const db=req.app.locals.db;
        const {name,email,password}=req.body
        const user=await Recruiter.findOne({email:email})
        const salt= await bcrypt.genSalt(10)
        const hashed=await bcrypt.hash(password,salt)
        const newUser={
            name,
            email,
            password:hashed
        }
        if(!user){
            try{
                await Transport.sendMail({
                    from:'Anuj Chaudhary',
                    to:email,
                    subject:'Welcome',
                    text:`Hi [${name}],

Welcome to [Anuj's Job Portal ]! We are thrilled to have you on board.

Your registration was successful, and your account is now ready to use. You can now log in and explore all the features we have to offer.

If you have any questions or need help getting started, feel free to reply to this email.

Best Regards,
The [Job_Portal] Team`

                })
            }catch(error){
                console.log(error)
                return resp.redirect("/recruiter/register?error=Invalid Email");

            }
        const result=await Recruiter.create(newUser)
        resp.render('index')
        }else{
            return resp.redirect("/recruiter/register?error=Invalid password or Email");
        }
        
        
    }catch(error){
        resp.status(500).send("there are some error in your internal code")
    }
};
export const c_register=async(req,resp)=>{
    try{
        const {name,email,password}=req.body
    
        const user=await Candidate.findOne({email:email})
        if(!user){
        const salt=await bcrypt.genSalt(10);
        const hashed=await bcrypt.hash(password,salt);
        const newuser={
           name,email,password:hashed
        }
         try{
                await Transport.sendMail({
                    from:'Anuj Chaudhary',
                    to:email,
                    subject:'Welcome',
                    text:`Hi [${name}],

Welcome to [Anuj's Job Portal ]! We are thrilled to have you on board.

Your registration was successful, and your account is now ready to use. You can now log in and explore all the features we have to offer.

If you have any questions or need help getting started, feel free to reply to this email.

Best Regards,
The [Job_Portal] Team`

                })
            }catch(error){
                console.log(error)
                return resp.redirect("/candidate/register?error=Invalid Email");

            }
        const result=await Candidate.create(newuser)
        resp.render("index")
        }else{
           return resp.redirect("/candidate/register?error=Invalid password or Email");
        }
        

    }catch(error){
        console.log(error)
        resp.status(500).send("their are some internal error")
    }
};
export const candidateLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
      
        const user = await Candidate.findOne({ email: email });

        if (!user) {
           return res.redirect("/candidate/login?error=Invalid password or Email");
        }
        const name=user.name
        if (!await bcrypt.compare(password,user.password)){
             return res.redirect("/candidate/login?error=Invalid password or Email");
        }
        req.session.userId=email;
        req.session.candidateId=user._id;
         try{
         await Transport.sendMail({
            from:'Anuj Chaudhary',
            to:email,
            subject:'welcome',
            text:`Welcome Back ${name}`
         })
        }catch(error){
            return res.redirect("/candidate/login?error=Email Is Not Valid");
        }
        res.redirect('/dashboard');

    } catch (error) {
        console.log(error);
        res.status(500).send("There is some internal error");
    }
};
//user.password !== password
