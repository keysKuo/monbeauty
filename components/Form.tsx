'use client';

import { redeemCode, RedeemForm } from '@/services/redeemCode';
import React, { useState } from 'react'
import { HiPhone, HiUser } from 'react-icons/hi'
import { HiEnvelope, HiGiftTop } from 'react-icons/hi2'
import { toast } from "react-toastify";



export default function Form() {
    const [redeemForm, setRedeemForm] = useState<RedeemForm>({
        fullname: "",
        email: "",
        phone: "",
        code: ""
    });
    const [loading, setLoading] = useState<boolean>(false);



    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRedeemForm({ ...redeemForm, [e.target.name]: e.target.value });
    };

    const clearForm = () => {
        const modal = document.getElementById('redeem-form') as HTMLDialogElement | null;
        if (modal) modal.close();
        setRedeemForm({
            fullname: "",
            email: "",
            phone: "",
            code: ""
        })
    }

    const onRedeem = async (e: React.ChangeEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            setLoading(true);

            if (!redeemForm.fullname) {
                toast("❌ Vui lòng điền họ và tên");
                return null;
            }

            if (!redeemForm.email.includes('@')) {
                toast("❌ Email không hợp lệ");
                return null;
            }

            if (redeemForm.phone.length !== 10) {
                toast('❌ Số điện thoại không hợp lệ');
                return null;
            }

            const result = await redeemCode(redeemForm);
            if (result) {
                toast("✔️ Xác nhận thành công");
                clearForm();
            }
            else {
                toast('❌ Mã khuyến mãi không hợp lệ');
            }
        } catch (error) {
            toast('❌ Xãy ra lỗi từ hệ thống');
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <dialog id="redeem-form" className="modal">
            <form onSubmit={onRedeem} className="modal-box bg-third text-center space-y-3 tablet:max-w-[400px] max-w-[333px]">
                <h3 className="font-bold text-lg mb-5 text-[1.25rem] uppercase">Phiếu khuyến mãi</h3>
                <label className="input input-bordered bg-[#ccc]  flex items-center gap-2">
                    <HiUser />
                    <input onChange={onChangeInput} name="fullname" type="text" className="grow text-[0.9rem]" value={redeemForm['fullname']} placeholder="Họ và tên" />
                </label>
                <label className="input input-bordered bg-secondary flex items-center gap-2">
                    <HiEnvelope />
                    <input onChange={onChangeInput} name="email" type="text" className="grow text-[0.9rem]" value={redeemForm['email']} placeholder="Email" />
                </label>
                <label className="input input-bordered bg-secondary flex items-center gap-2">
                    <HiPhone />
                    <input onChange={onChangeInput} name="phone" type="text" className="grow text-[0.9rem]" value={redeemForm['phone']} placeholder="Số điện thoại" />
                </label>
                <label className="input input-bordered bg-[#bdc] flex items-center gap-2">
                    <HiGiftTop />
                    <input onChange={onChangeInput} name="code" type="text" className="grow text-[0.9rem]" value={redeemForm['code']} placeholder="Mã khuyến mãi" />
                </label>

                <button type='submit' className='px-8 py-2 bg-zinc-700 rounded-badge text-[#ccc] hover:opacity-80 text-[0.9rem]'>{loading ? <span className="loading loading-spinner loading-xs"></span> : "Xác nhận"}</button>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}
