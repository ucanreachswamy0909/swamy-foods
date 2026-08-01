import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: Request) {
  try {
    console.log("API HIT");

    const body = await req.json();

    const { data, error } = await supabaseAdmin
      .from("products")
      .insert([
        {
          name: body.name,
          description: body.description,
          price: Number(body.price),
          stock: Number(body.stock),
          is_active: true,
        },
      ])
      .select();

    console.log("Supabase Error:", error);

    if (error) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (err) {
    console.error("Server Error:", err);

    return NextResponse.json(
      {
        success: false,
        error: "Server Error",
      },
      { status: 500 }
    );
  }
}