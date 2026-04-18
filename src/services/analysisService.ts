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

  const response = await fetch(
    "/analyze",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    throw new Error(`שגיאה בשרת: ${response.statusText}`);
  }

  return response.json();
};
