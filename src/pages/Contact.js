import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => alert("Message Sent! " + JSON.stringify(data));

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="fw-bold mb-4">Let's Connect</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-4 rounded-4">
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input 
                {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              />
              {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea 
                {...register("message", { required: "Please write a message" })}
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                rows="4"
              ></textarea>
            </div>
            <button className="btn btn-dark w-100 py-2">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
