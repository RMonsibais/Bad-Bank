import React, { useState } from 'react'


const Deposits = ({ onAdjust, user }) => {
    const [amount, setAmount] = useState(0)
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        onAdjust(amount)
        setSubmitted(true)
    }
    return (
        <div className='card' style={{ width: "36rem" }}>
            <div className='card-body'>
                <div>
                    {user.balance}
                </div>
                    {submitted && <div>
                        Your Deposit Was Submitted!
                    </div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 row">
                        <label for="staticEmail" className="col-sm-2 col-form-label">Amount</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticEmail" placeholder="email@example.com" value={amount} onChange={(event) => { setAmount(+event.target.value) }} />
                        </div>
                    </div>
                    <button className='btn btn-primary'>Deposit</button>
                </form>
            </div>
        </div>
    )
}

export default Deposits    