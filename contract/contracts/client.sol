//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

// /**
//  * @title Banque records
//  * @author Pushkcar
//  * @dev Store & retreive patient details
//  */

contract Client {
    mapping(int256 => Patientt) internal patients;
    // mapping(uint256 =>attendant) attendantlist;
    Patientt[] patientlist;

    event PatientAdded(
        address _id,
        string _fname,
        string _lname,
        int256 _cin,
        int256 _phone,
        string _email,
        string _address,
        string _status
    );

    // event StatusUpdated(
    //   string stat
    // );
    

    struct Patientt {
        address id;
        string fname;
        string lname;
        int256 cin;
        int256 phone;
        string email;
        string adress;
        string status;
    }
    Patientt p;
    
    /**
         * @dev Store patient details
            //   * @param _id id
            //  * @param _fname fname
           //  * @param _lname lname
          //  * @param _cin cin
           //  * @param _phone phone
            //  * @param _email email
          //  * @param _address adress
          //  * @param _status status
         */
    function store_patient_details(
        address _id,
        string memory _fname,
        string memory _lname,
        int256 _cin,
        int256 _phone,
        string memory _email,
        string memory _address,
        string memory _status
    ) public {
        p.id = _id;
        p.fname = _fname;
        p.lname = _lname;
        p.cin = _cin;
        p.phone = _phone;
        p.email = _email;
        p.adress = _address;
        p.status = _status;
        patients[p.cin] = p;

        patientlist.push(p);
        emit PatientAdded(
            p.id,
            p.fname,
            p.lname,
            p.cin,
            p.phone,
            p.email,
            p.adress,
            p.status
        );
    }

    /**
    //  * @dev Retreive patient details
    //  * @param cin patient cin
    //  * @return patient object
    * */

    function retreive_patient_details(int256 cin)
        public
        view
        returns (Patientt memory)
    {
        return patients[cin];

    }

    
    /**
    //  * @dev Retreive patient details
    //  * @return patientss object
     * */
    function retreive_patients() public view returns (Patientt[] memory) {
        return patientlist;
    }

     function update_patient_status(int256 cin)
        public
        
    {
        string memory stat="True";
         patients[cin].status=stat;
        //  emit StatusUpdated( stat);
    }

}
