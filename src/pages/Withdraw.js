import React, { useState } from 'react'


const Withdraw = ({ onAdjust, user }) => {
    const [amount, setAmount] = useState(0)
    const [submitted, setSubmitted] = useState(false)
    const [errored, setErrored] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (amount > user.balance) {
            setErrored(true)
            setSubmitted(false)
            return
        }
        onAdjust((amount) * -1)

        setSubmitted(true)
    }
    return (
        <div className='card' style={{ width: "36rem" }}>
            <div className='card-body'>
                <div>
                    {user.balance}
                </div>
                {submitted && <div>
                    Your Withdraw Was Submitted!
                </div>}
                {errored && <div>NOT ENOUGH MONEY!</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 row">
                        <label for="staticEmail" className="col-sm-2 col-form-label">Amount</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticEmail" placeholder="email@example.com" value={amount} onChange={(event) => { setAmount(+event.target.value) }} />
                        </div>
                    </div>
                    <button className='btn btn-primary'>Withdraw</button>
                </form>
            </div>
        </div>
    )
}

export default Withdraw 