import React from 'react';

function Items({ todos }) {
  return (
    <>
      {todos.map((items) => (
        <div className='w-1/2 h-36 rounded-xl border  border-t-dark m-2' key={items.id}>
          <div>
            <input
              className='bg-t-fade border border-t-dark outline-t-dark my-2 rounded-xl p-2 w-1/2 m-2'
              placeholder='Enter your title'
              type='text'
              value={items.title}
              readOnly
            />
          </div>
          <div>
            <input
              className='bg-t-fade border border-bg outline-t-dark my-2 rounded-xl p-2 w-3/4 h-auto m-2'
              placeholder='Write your description...'
              type='text'
              value={items.description}
              readOnly
            />
            {/* <button className='mx-12 bg-t-dark p-2 rounded-xl'>Add</button> */}
          </div>
        </div>
      ))}
    </>
  );
}

export default Items;
