"use client"
import {SignIn, useClerk, useSignIn, useSignUp} from "@clerk/nextjs";
import {useCallback, useEffect} from "react";

export default function Page() {

    return (
        <div className="flex justify-center py-24">
            <SignIn appearance={
                {
                    elements: {
                        headerTitle: {
                            // textDecoration: "underline"
                        }
                    }
                }
            }/>
        </div>
    );
}
