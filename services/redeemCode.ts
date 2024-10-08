import { API_URL } from "@/constants";

export type RedeemForm = {
    fullname: string,
    email: string,
    phone: string,
    code: string
}

export async function redeemCode(redeemForm: RedeemForm) {
    const redeem = await fetch(API_URL + `/api/khuyen-mais?filters[code][$eq]=${redeemForm.code}&filters[used][$eq]=false`, { cache: 'no-store' })
        .then(response => response.json())
        .then(result => result.data);

    if (redeem.length === 0)
        return null;

    const updatedData = {
        data: { used: true }
    };

    const updatedResult = await fetch(
        API_URL + `/api/khuyen-mais/${redeem[0].documentId}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
            cache: 'no-store'
        }
    )
        .then(response => response.json())
        .then(result => result.data);

    return updatedResult || null;
}
