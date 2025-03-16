'use server';
import { cookies } from "next/headers";
import {  FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
// -----------user register------------
export const registerUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(userData),
    });

    const result = await res.json();

    if (result.success) {
      (await cookies()).set("token", result.data.token);
      // (await cookies()).set("refreshToken", result?.data?.refreshToken);
    }

    return result;
  } catch (error: any) {
    return new Error(error); // Fix: Properly return an Error instance
  }
};

    // -------------login user-----------
    export const loginUser = async (userData: FieldValues) => {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });
      
          const result = await res.json();
      
          if (result?.success) {
            (await cookies()).set("token", result?.data?.token);
            (await cookies()).set("refreshToken", result?.data?.refreshToken);
          }
      
          return result;
        } catch (error: any) {
          return Error(error);
        }
      };
      
    //   -----------current user--------
    
export const getCurrentUser = async () => {
    const token = (await cookies()).get("token")?.value;
    let decodedData = null;
  
    if (token) {
      decodedData = await jwtDecode(token);
      return decodedData;
    } else {
      return null;
    }
  };

  // google rechapture------

  export const reCaptchaTokenVerification = async (token: string) => {
    try {
      const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.NEXT_PUBLIC_RECAPTCHA_SERVER_KEY!,
          response: token,
        }),
      });
  
      return res.json();
    } catch (err: any) {
      return Error(err);
    }
  };
// ----------- Delete User -----------
export const deleteUser = async (userId: string) => {
  try {
    const token = (await cookies()).get("token")?.value;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/${userId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// ----------- Update User -----------
export const updateUser = async (userId: string, userData: FieldValues) => {
  try {
    const token = (await cookies()).get("token")?.value;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/${userId}`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
// ---------logout---------
export const logout =async()=>{
((await cookies()).delete("token"))
}
  