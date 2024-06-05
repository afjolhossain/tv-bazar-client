const ContactUs = () => {
  return (
    <div className="">
      <form className="card-body w-3/4 mx-auto">
        <h1 className="text-4xl font-bold">Contsct US </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">NAME</span>
          </label>
          <input type="text" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">EMAIL</span>
          </label>
          <input type="EMAIL" className="input input-bordered" required />
          <div className="label">
            <span className="label-text font-bold">MESSAGE</span>
          </div>
          <textarea className="textarea textarea-bordered h-24 "></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary w-1/4">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
