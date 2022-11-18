import React from 'react';
import './mission.css';

const Mission = () => (
  <div className="missions">
    <table>
      <thead className="tableHeader">
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="missionName">Thaicom</td>
          <td className="missionDescription">askdjaksdajdkasjdkas njdajlas anjnajsdj ajksdnajsdjas njfdasdjas ajdnajxende</td>
          <td className="btnRow">
            <span className="activeMember">Active Member </span>
          </td>
          <td className="btnRow">
            <button type="button" className="activeButton">
              Leave Mission
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Mission;
