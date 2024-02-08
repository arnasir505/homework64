const Contacts = () => {
  return (
    <div className='container'>
      <h1 className='text-center my-5'>Contact Us</h1>
      <div className='row justify-content-evenly'>
        <div className='col-lg-3 text-center'>
          <h2 className='fw-normal mb-3'>By Phone</h2>
          <p className='fw-bold text-body-secondary'>
            North America Toll-Free: <br /> 1-877-930-7483
          </p>
          <p className='fw-bold text-body-secondary'>
            International: <br /> 1-604-637-0780
          </p>
        </div>
        <div className='col-lg-3 text-center'>
          <h2 className='fw-normal mb-3'>Start a new case</h2>
          <p className='fw-bold text-body-secondary'>
            Just send us your questions or concerns by starting a new case and
            we will give you the help you need.
          </p>
          <a href='#' className='btn btn-primary'>
            START HERE
          </a>
        </div>
        <div className='col-lg-3 text-center'>
          <h2 className='fw-normal mb-3'>Live Chat</h2>
          <p className='fw-bold text-body-secondary'>
            Chat with a member of our in-house team.
          </p>
          <a href='#' className='btn btn-primary'>
            START CHAT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
