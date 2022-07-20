import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import befangYouthsInitiative from '../db.json'
import Title from './Title';
import Title2 from './Title2';
import CountUp from 'react-countup';

const BefangYouthsInitiative=()=>{

    const [members, setMembers] = useState([])
  useEffect(() =>{
    let members = befangYouthsInitiative.beyoin;
    setMembers(members)
  }, [members])
  let executiveMembers = members.filter(member => member.executive === true)
  return (
    <>
       <div class="page-hero" id="hero-img">
          <h1 class="page-hero-text">Welcome to BEFANG YOUTHS INITIATIVE</h1>
          <div className="beyoin-counter">
              <div className="text-center" style={{ backgroundColor: "var(--darkBlue)", padding:"10px", display:"grid", placeItems:"center"}}>
                    <div>
                    <h6 className=" text-capitalize" style={{color: "var(--mainOrange)"}}>members</h6>
                  <h1 className="value">
                    <CountUp
                      start={0}
                      end={127}
                      duration={3}
                    />    
                  </h1>
                    </div>
              </div>
              <div className="text-center" style={{ backgroundColor: "var(--darkBlue)"  , padding:"10px", display:"grid", placeItems:"center"}}>
                    <div>
                    <h6 className=" text-capitalize" style={{color: "var(--mainOrange)"}}>capital</h6>
                  <h1 className="value">
                   000FCFA
                  </h1>
                    </div>
              </div>
          </div>
          <h6 className='motto'>motto: together we stand, divided we fall</h6>
      </div>
      <WhoWeAre />
      <Title title="executive members of the Group" />
       
            <div className='row becuda-executive mx-auto' style={{margin:"0 auto", width:"100vw"}}>
            {executiveMembers.map(member => (
                <ExMember key={member.id} {...member}/>
            ))}
            </div>
       
     
      <Title title="all our members" />
      <div className='row'>
      {members.map(member => (
        <Member key={member.id} {...member}/>
      ))}
      </div>
    </>
  )
}

const Member=({id, name, img}) => {
    return (
<div className="col-sm-6 col-lg-3 py-4" style={{display:"flex", justifyContent:"spaceBetween", alignItems:"center"}}>
            <div style={{width:"50px", height:"50px"}}>
              <img src={require('../beyoinImages/'+img)} alt="person" style={{maxWidth:"100%", borderRadius:"50%"}}/>
            </div>
               <div className="px-4">
               <h6 style={{ color:"Var(--mainOrange)"}}>{name}</h6>
                 <Link to={`/beyoin/${id}`} style={{color:"Var(--heroWhite)"}}>See Profile</Link>
               </div>
          </div>
        // end
       
    )
}

const ExMember=({ title, name, img}) => {
    return (
      <div className='becuda-member'>
      <div className='becuda-image-wrapper'>
       <img src={require('../beyoinImages/'+img)} alt="project" />
      </div> 
     
      <div className='py-2 ml-2'>
      <h4 className="text-uppercase" style={{ color:"Var(--mainOrange)"}}>{name}</h4>      
      <p className='text-capitalize' style={{ color:"Var(--heroWhite)"}}>{title}</p>
      </div>
   </div>
    )
}
const WhoWeAre=() => {
  return (
    <div className='container'>
       <div className='row'>
        
           <div className='col-sm-9 col-md-8 col-lg-6 mx-auto text-center' >
           <Title2 title="who we are" />
            <p style={{ color:"Var(--softWhite)"}}>
              We are proud Sons and Daughters of Befang. Befang Youths Initiative (BEYOIN)
               is a group of members belonging to the Befang village only that primarily operates on WhatsApp created by <span className='text-uppercase' style={{ color:"Var(--lightGreen)"}}> Esoh derick </span> 
               who is currently the President of the group. It was based on the idea of <span className='text-capitalize' style={{ color:"Var(--lightRed)"}}>"Together we stand, divided we fall" </span> 
               that inspired him to create this group. It is a purely democratic group where members freedom of speech is a value. The group currently has over 127 members.
               Membership is currently free. Just contact  <span className='text-capitalize' style={{ color:"Var(--lightRed)"}}>+237 680401122</span> to join.
            </p>
           </div>
           <div className='col-sm-9 col-md-8 col-lg-6 mx-auto text-center' >
           <Title2 title="what we do" />
            <p style={{ color:"Var(--softWhite)"}}>
              Our motto is  <span className='text-capitalize' style={{ color:"Var(--lightRed)"}}>"Together we stand and divided we fall"</span>. This is the 
              source of our strenght. Every member is his/her brother's keeper. We stand to give collective support to members in times of trouble. 
              We also support our brothers and sisters financially to help them establish and grow in their various domains.
            </p>
           </div>
           <div className='col-sm-9 col-md-8 col-lg-6 mx-auto text-center' >
           <Title2 title="our mission" />
            <p style={{ color:"Var(--softWhite)"}}>
              To make the people of Befang hence the Befang Village Great.
              To be the small village that gives light to the whole of Menchum Division.
            </p>
           </div>
           <div className='col-sm-9 col-md-8 col-lg-6 mx-auto text-center' >
           <Title2 title="our vision" />
            <p style={{ color:"Var(--softWhite)"}}>
            <span className='text-capitalize' style={{ color:"Var(--lightRed)"}}>"I will not give you fish but i will teach you how to catch fish"</span> is the backbone 
            of our vision. We seek to empower every Son/Daughter of befang financially and morally because financial independence leads to growth peace and prosperity.
            We want to become a financial power-house of Befang in the nearest future, transforming dreams into reality
            </p>
           </div>
          </div>
    </div>
           
  )
}

export default BefangYouthsInitiative