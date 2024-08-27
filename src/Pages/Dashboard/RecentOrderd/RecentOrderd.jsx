import React from 'react';
import { FaEye } from 'react-icons/fa';
import { LuView } from 'react-icons/lu';

const RecentOrderd = () => {
    return (
        <div className='mt-5'>
            <div className="overflow-x-auto rounded-2xl">
  <table className="table">
    {/* head */}
    <thead className='bg-base-300'>
      <tr className=' font-semibold textarea-md text-black'>
        <th>SL</th>
        <th>Name</th>
        <th> Quantity</th>
        <th>Options</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className='text-md'>
        <th>1</th>
        <td>Ganderton</td>
        <td>Quality Control Specialist</td>
        <td className='lg:tooltip tooltip-right tooltip-primary' data-tip="See details"><LuView size={25} />
        </td>
      </tr>
      {/* row 2 */}
      <tr className="hover">
        <th>2</th>
        <td>Hagerty</td>
        <td>Desktop Support Technician</td>
        <td className='lg:tooltip tooltip-right tooltip-primary' data-tip="See details"><LuView size={25} />
        </td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Swyre</td>
        <td>Tax Accountant</td>
        <td className='lg:tooltip tooltip-right tooltip-primary' data-tip="See details"><LuView size={25} />
        </td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default RecentOrderd;