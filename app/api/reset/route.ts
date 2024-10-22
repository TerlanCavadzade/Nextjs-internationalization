import { revalidateTag } from "next/cache"


export async function GET() {


    revalidateTag("locale")

    return new Response({ message: "success" }, {
        status: 200
    })
}