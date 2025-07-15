import nodemailer from 'nodemailer';
import otpGenerator from 'otp-generator'

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.USER_EMAIL,
        pass:process.env.USER_PASSWORD
    }
});

const generateOTP = () => {
    return otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
}

const sendOTPEmail = async(email,otp)=>{
    const mailOptions={
        from:'rohitseervi8866@gmail.com',
        to:`${email}`,
        subject:'OTP for registration',
        text:`Your OTP for registration is ${otp}. It is valid for 5 minutes.`
    }
    await transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log("Error sending email:", error);
        }
        else{
            console.log("Email sent successfully:",info.response);
        }
    })

}

export { generateOTP, sendOTPEmail };