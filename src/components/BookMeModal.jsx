import React from "react";

const BookMeModal = () => {
  return (
    <div>
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
      
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <div className="modal-action">
              <span method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </span>
            </div>
          </div>
        </dialog>
    </div>
  );
};

export default BookMeModal;
