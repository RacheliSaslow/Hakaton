type AnalysisPayload = {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
};

export const sendAnalysisData = async (data: AnalysisPayload) => {
  const payload = {
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    ...(data.phone && { phone: data.phone }),
  };

  try {
    console.log("📤 Starting fetch request with payload:", payload);

    const response = await fetch("/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("📨 Response status:", response.status);
    console.log("📨 Response headers:", response.headers);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Server error response:", errorText);
      throw new Error(`שגיאה בשרת: ${response.statusText}`);
    }

    const contentType = response.headers.get("content-type");
    console.log("📨 Content-Type:", contentType);

    if (!contentType || !contentType.includes("application/json")) {
      console.warn("⚠️ Response is not JSON, assuming success");
      return { success: true };
    }

    const text = await response.text();
    console.log("📨 Response text:", text);

    if (!text) {
      console.warn("⚠️ Empty response body, assuming success");
      return { success: true };
    }

    const data = JSON.parse(text);
    console.log("✅ Parsed response:", data);
    return data;
  } catch (error) {
    console.error("❌ Error in sendAnalysisData:", error);
    throw error;
  }
};
