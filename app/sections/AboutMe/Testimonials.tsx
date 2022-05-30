import * as React from "react";


const Testimonials: React.FC = ({}) => {
  return (

    <div className="partner">
        <div className="container mx-auto px-6 space-y-8 md:px-12">
            <div className="m-auto text-center ">
                <h2 className="text-2xl text-textSmColor font-bold md:text-4xl">Development Partner und Unternehmen</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 rounded-md">
                <div className="p-4">
                    <img src="images/cloud.png" className="w-100" alt=""></img>
                </div>
                <div className="p-4">
                    <img src="images/partner.png" className="w-180 mt-10" alt=""></img>
                </div>
                <div className="p-4">
                    <img src="images/plus.png" className="w-100 mt-10" alt=""></img>
                </div>
                <div className="p-4">
                    <img src="images/aws.png" className="w-50 mt-3" alt=""></img>
                </div>
            </div>
        </div>
{/* 
        <div className="m-auto text-center py-10">
		<div className="md:text-4xl sm:text-3xl font-medium mb-5 text-textLgColor mb-8">”</div>
		<div className="font-medium max-w-xl text-2xl m-auto text-gray-500">
			We know the ecosystem very well and they provides the speed, flexible account model and API-first approach
			that no one else can. These aspects are essential to building certain products that power our customers'
			growth.
		</div>
		<div className="mt-5 text-sm">
			<span className="md:text-xl font-medium text-textLgColor ">Henrique Dubugras</span><span className="md:text-lg  font-small text-textLgColor"> — Co-Founder and CEO, Acme</span>
		</div> */}
	{/* </div> */}

    </div>

    
  );
};

export default Testimonials;



