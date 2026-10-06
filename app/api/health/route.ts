import { NextResponse } from "next/server";
export function GET(){return NextResponse.json({ok:true,service:"mavrent-platform",timestamp:new Date().toISOString()});}