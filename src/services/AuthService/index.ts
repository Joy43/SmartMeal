import { cookies } from "next/headers";
import {  FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
// -----------user register------------
export const registerUser=async(userData:FieldValues)=>{
    try{
        const res=await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/register`,{
            method:'POST',
            headers:{
                "Content-Type":"application"
            },
            body: JSON.stringify(userData),
        });
        const result = await res.json();

        if (result.success) {
          (await cookies()).set("accessToken", result.data.accessToken);
          (await cookies()).set("refreshToken", result?.data?.refreshToken);
        }
    
        return result;
      } catch (error: any) {
        return Error(error);
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
            (await cookies()).set("accessToken", result?.data?.accessToken);
            (await cookies()).set("refreshToken", result?.data?.refreshToken);
          }
      
          return result;
        } catch (error: any) {
          return Error(error);
        }
      };
      
    //   -----------current user--------
    
export const getCurrentUser = async () => {
    const accessToken = (await cookies()).get("accessToken")?.value;
    let decodedData = null;
  
    if (accessToken) {
      decodedData = await jwtDecode(accessToken);
      return decodedData;
    } else {
      return null;
    }
  };
// ----------- Delete User -----------
export const deleteUser = async (userId: string) => {
  try {
    const accessToken = (await cookies()).get("accessToken")?.value;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/${userId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
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
    const accessToken = (await cookies()).get("accessToken")?.value;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/${userId}`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
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
  