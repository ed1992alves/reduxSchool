


export const Modal = () => {

    return(

        <div className="modal">
        <div className="modal-box">
          <div className="modal-box-header">
            <h3>Add Song</h3>
          </div>

        <form>

            <div className="modal-box-body">
              
              <label> Name :</label>
              <input name="name" placeholder="name" />

              <label> Artits :</label>
              <input  name="artist" placeholder="artist"  />

              <label> Album :</label>
              <input  name="album" placeholder="album" />
            </div>

            <div className="button-submit">
              <button type="submit">Submit</button>
            </div>

          </form>

        </div>
      </div>
    );
}