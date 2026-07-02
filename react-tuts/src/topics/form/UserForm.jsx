import { useMemo, useState } from 'react'

const UserForm = () => {
  const [userForm, setUserForm] = useState({ name: '', email: '', mobile: '' })
  const [isUserFormTouched, setIsUserFormTouched] = useState({ name: false, email: false, mobile: false })

  const formHander = (e) => {
    const {name, value} = e.target;

    setIsUserFormTouched((prev)=>({
      ...prev,
      [name]:true
    }))

    setUserForm((prev)=>({
      ...prev,
      [name]:value
    }))
  }

 const isFormValid = useMemo(() => {
  return {
    name: userForm.name.length <= 0,
    email: userForm.email.length <= 0,
    mobile: userForm.mobile.length <= 0
  };
}, [userForm]);

  const submitForm = ()=>{

  }

  return (
    <>
      <form className='row'>
        <div className="col-md-6">
          <div class="form-group">
            <label for="email">Full Name</label>
            <input type="text" name='name' onBlur={formHander} onChange={formHander} className={`form-control shadow-none ${isFormValid.name && isUserFormTouched.name ?'is-invalid' : ''}`} id="full-name" placeholder="Full name" />
            <small class="invalid-feedback">Please enter a valid full name </small>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" name='email' onBlur={formHander} className={`form-control shadow-none ${isFormValid.email && isUserFormTouched.email?'is-invalid' : ''}`} onChange={formHander} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" class="invalid-feedback">Please enter valid email</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Mobile</label>
            <input type="text" name='mobile' onBlur={formHander} className={`form-control shadow-none ${isFormValid.mobile && isUserFormTouched.mobile?'is-invalid' : ''}`} onChange={formHander} id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" class={`btn btn-primary `} onClick={submitForm}>Submit</button>
        </div>
      </form>
    </>
  )
}

export default UserForm