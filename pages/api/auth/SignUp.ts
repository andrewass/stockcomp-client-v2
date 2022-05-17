import {NextApiRequest, NextApiResponse} from "next";
import {CONTEST_BASE_URL} from "../../../common/properties";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const response = await axios({
        method: "post",
        url: CONTEST_BASE_URL+"/auth/sign-up",
        data: req.body,
        withCredentials: true
    });
    return response.data;
}