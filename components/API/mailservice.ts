// src/services/mailService.ts

export const sendContactEmail = async (formData: FormData) => {
  // Access Key สำหรับ wanwisa.skl12@gmail.com
  const ACCESS_KEY = "bf5cb809-315f-460f-8c2b-f64c0cfd8230";
  
  formData.append("access_key", ACCESS_KEY);
  
  // ตั้งค่าเพิ่มเติมเพื่อให้ Gmail ไม่มองว่าเป็น Spam และแจ้งเตือนได้แม่นยำ
  formData.append("from_name", "JDev Studio Contact"); 
  formData.append("subject", `New Inquiry from ${formData.get("name")}`);
  
  // ช่วยให้กด Reply ใน Gmail ตอบกลับหาลูกค้าได้ทันที
  formData.append("replyto", formData.get("email") as string); 

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json"
      }
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Mail Service Error:", error);
    throw new Error("ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้ในขณะนี้");
  }
};