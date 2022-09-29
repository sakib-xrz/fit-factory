import React from 'react';

const MobileBlog = () => {
    return (
      <div className="w-11/12 mx-auto my-12 lg:hidden">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-md mb-3"
        >
          <div className="collapse-title text-xl font-medium pr-12 md:pr-4">
            How Does React Work ?
          </div>
          <div className="collapse-content">
            <p>
              React uses a declarative paradigm that makes it easier to reason
              about your application and aims to be both efficient and flexible.
              It designs simple views for each state in your application, and
              React will efficiently update and render just the right component
              when your data changes. The declarative view makes your code more
              predictable and easier to debug.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-md mb-3"
        >
          <div className="collapse-title text-xl font-medium pr-12 md:pr-4">
            What Is Difference Between Props And State ?
          </div>
          <div className="collapse-content">
            <p>
              Simply put, State is the local state of the component which cannot
              be accessed and modified outside of the component. It's equivalent
              to local variables in a function. Props, on the other hand, make
              components reusable by giving components the ability to receive
              data from their parent component in the form of props.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-md"
        >
          <div className="collapse-title text-xl font-medium pr-12 md:pr-4">
            What does useEffect do other than load data?
          </div>
          <div className="collapse-content">
            <p>
              By using this Hook, you tell React that your component needs to do
              something after render. React will remember the function you
              passed (we’ll refer to it as our “effect”), and call it later
              after performing the DOM updates. In this effect, we set the
              document title, but we could also perform data fetching or call
              some other imperative API.
            </p>
          </div>
        </div>
      </div>
    );
};

export default MobileBlog;