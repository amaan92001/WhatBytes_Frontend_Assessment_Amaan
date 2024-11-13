import React, { useState } from 'react';
import image1 from '../assets/html.png';
import image2 from '../assets/cup.png';
import image3 from '../assets/tick.png';
import image4 from '../assets/sheet.png';
import image5 from '../assets/one.png';
import image6 from '../assets/two.png';
import image7 from '../assets/three.png';
import image8 from '../assets/graph.png';
import image9 from '../assets/progress1.png';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { PieChart, Pie, Cell, Legend} from 'recharts';

const SkillTest = () => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rank, setRank] = useState(4); 
    const [percentile, setPercentile] = useState(90); 
    const [correctAnswers, setCorrectAnswers] = useState(12); 
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip bg-white p-2 border border-gray-300 rounded">
                    <p className="label">{label}</p>
                    <p className="intro text-blue-500">{`Number of Students: ${payload[0].value}`}</p>
                </div>
            );
        }
    
        return null;
    };

    const data = [
        { percentile: 0,  value: 0 },
        { percentile: 10, value: rank+1 },
        { percentile: 20, value: rank+2 },
        { percentile: 30, value: rank+9 },
        { percentile: 40, value: rank+22 },
        { percentile: 50, value: rank+3 },
        { percentile: 60, value: rank+6 },
        { percentile: 70, value: rank+5 },
        { percentile: 80, value: rank+4 },
        { percentile: 90, value: rank+3 },
        { percentile: 100, value:rank+2}
      ];

      const pieData = [
        { name: 'Correct', value: correctAnswers },
        { name: 'Incorrect', value: 15 - correctAnswers }
    ];

    const COLORS = ['#0088FE', '#82CAFF'];
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        setRank(parseInt(event.target.elements.rank.value));
        setPercentile(parseInt(event.target.elements.percentile.value));
        setCorrectAnswers(parseInt(event.target.elements.score.value));
        setIsModalOpen(false); 
    };

    return (
        <>
        <div className='hidden md:block'> 
            <div className='grid grid-cols-2'>
            <div className="flex flex-col">
            <div className="mt-5 p-6 border border-gray-200 rounded-lg max-w-2xl">
                <div className="flex items-center justify-between">
                    <img src={image1} alt="HTML Logo" className="w-16 h-16" />
                    <div className="flex-grow ml-4">
                        <h2 className="text-lg font-bold">Hyper Text Markup Language</h2>
                        <p className="text-gray-500 font-normal">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
                    </div>
                    <button onClick={openModal} className="bg-blue-900 text-white px-4 py-2 rounded-md">Update</button>
                </div>
            </div>
           
            
            
            <div className="mt-5 p-4 border border-gray-200 rounded-lg max-w-2xl">
                <span className='font-bold'>Quick Statistics</span>
                <div className="flex justify-around mt-4">
                    <div className="text-center flex flex-col items-center">
                        <div className="flex items-center">
                            <img src={image2} alt="Cup" className="w-12 h-12 mr-2"/>
                            <p className="text-2xl font-semibold">{rank}</p>
                        </div>
                        <p className="text-gray-600 ml-5">YOUR RANK</p>
                    </div>
                    <div className="w-px h-20 bg-gray-300"></div>
                    <div className="text-center flex flex-col items-center">
                        <div className="flex items-center">
                            <img src={image4} alt="Sheet" className="w-12 h-12 mr-2"/>
                            <p className="text-2xl font-bold">{percentile}%</p>
                        </div>
                        <p className="text-gray-600">PERCENTILE</p>
                    </div>
                    <div className="w-px h-20 bg-gray-300"></div>
                    <div className="text-center flex flex-col items-center">
                        <div className="flex items-center">
                            <img src={image3} alt="Tick" className="w-12 h-12 mr-2"/>
                            <p className="text-2xl font-bold">{correctAnswers} / 15</p>
                        </div>
                        <p className="text-gray-600">CORRECT ANSWERS</p>
                    </div>
                </div>
            </div>
            <div className="mt-5 p-4 border border-gray-200 rounded-lg max-w-2xl">
                <span className='font-bold'>Comparison Graph</span>
                <div className='mt-5'>
                <div className="flex">
                    <span className='font-semibold text-gray-500'>You scored {percentile}% percentile which is lower than the average percentile 72% of all the engineers who took this assessment</span>
                    <img src={image8} alt="Sheet" className="w-16 h-16 mr-2"/>
                    </div>

                    <ResponsiveContainer width="100%" height={300} className="mt-5">
                        <LineChart data={data}>
                          
                            <XAxis dataKey="percentile" />
                           
                            <Tooltip content={CustomTooltip}/>
                            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <ReferenceLine x={percentile} stroke="red" label={{ position: 'insideTopLeft', value: 'Your Percentile' }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
                        <h2 className="text-xl font-bold mb-4">Update Scores</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4 flex items-center">
                                <img src={image5} alt="Cup" className="w-8 h-8 mr-2"/>
                                <label className="block text-gray-700 mr-2">Update Your Rank</label>
                                <input type="text" name="rank" className="mt-1 p-2 ml-36  border border-gray-300 rounded-md" defaultValue={rank} />
                            </div>
                            <div className="mb-4 flex items-center">
                                <img src={image6} alt="Sheet" className="w-8 h-8 mr-2"/>
                                <label className="block text-gray-700 mr-2">Update Your Percentile</label>
                                <input type="text" name="percentile" className="mt-1 p-2 ml-28 border border-gray-300 rounded-md" defaultValue={percentile} />
                            </div>
                            <div className="mb-4 flex items-center">
                                <img src={image7} alt="Tick" className="w-8 h-8 mr-2"/>
                                <label className="block text-gray-700 mr-2">Update Your Current Score (out of 15)</label>
                                <input type="text" name="score" className="mt-1 p-2 ml-1 border border-gray-300 rounded-md" defaultValue={correctAnswers} />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2">Cancel</button>
                                <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded-md">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            </div>
            <div className='flex flex-col'>
            <div className="mt-5  border border-gray-200 rounded-lg  ml-10">
            <img src={image9} alt="Progress" className=''/>
            </div>
            <div className="mt-5 p-5 border border-gray-200 rounded-lg max-w-3xl ml-10">
            <div className='flex justify-between'>
            <span className='font-bold'>Question Analysis</span>
            <span className='text-blue-900 font-semibold'>{correctAnswers}/15</span>
            </div>
            <div className='mt-4 flex'>
            <span className='text-gray-500 font-bold'>You scored {correctAnswers} out of 15.{correctAnswers===15?<span className='text-gray-500 font-bold'>Well Done</span>:<span className='text-gray-500 font-bold'>However it still needs some improvement</span>} </span>
            
            </div>
            <ResponsiveContainer width="100%" height={300} className="mt-5">
                            <PieChart>
                                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
            </div>
            </div>

            </div>
            </div>
            <div className='block md:hidden'>
            <div className='flex flex-col'>
            <div className="flex flex-col">
            <div className="mt-5 p-6 border border-gray-200 rounded-lg max-w-2xl">
                <div className="flex flex-col items-center justify-between">
                    <img src={image1} alt="HTML Logo" className="w-16 h-16" />
                    <div className="flex-grow ml-4">
                        <h2 className="text-lg font-bold">Hyper Text Markup Language</h2>
                        <p className="text-gray-500 font-normal">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
                    </div>
                    <button onClick={openModal} className="bg-blue-900 text-white px-4 py-2 rounded-md">Update</button>
                </div>
            </div>
           
            
            
            <div className="mt-5 p-4 border border-gray-200 rounded-lg max-w-2xl ">
                <span className='font-bold'>Quick Statistics</span>
                <div className="flex  justify-around mt-4">
                    <div className="text-center flex flex-col items-center">
                        <div className="flex flex-col items-center">
                            <img src={image2} alt="Cup" className="w-12 h-12 mr-2"/>
                            <p className="text-xl font-semibold mr-2">{rank}</p>
                        </div>
                        <p className="text-gray-600">YOUR RANK</p>
                    </div>
                    <div className="w-px h-20 bg-gray-300"></div>
                    <div className="text-center flex flex-col items-center">
                        <div className="flex flex-col items-center">
                            <img src={image4} alt="Sheet" className="w-12 h-12 mr-2"/>
                            <p className="text-2xl font-bold">{percentile}%</p>
                        </div>
                        <p className="text-gray-600">PERCENTILE</p>
                    </div>
                    <div className="w-px h-20 bg-gray-300"></div>
                    <div className="text-center flex flex-col items-center">
                        <div className="flex flex-col items-center">
                            <img src={image3} alt="Tick" className="w-12 h-12 mr-2"/>
                            <p className="text-2xl font-bold">{correctAnswers} / 15</p>
                        </div>
                        <p className="text-gray-600">CORRECT ANSWERS</p>
                    </div>
                </div>
            </div>
            <div className="mt-5 p-4 border border-gray-200 rounded-lg max-w-2xl">
                <span className='font-bold'>Comparison Graph</span>
                <div className='mt-5'>
                <div className="flex">
                    <span className='font-bold text-gray-500'>You scored {percentile}% percentile which is lower than the average percentile 72% of all the engineers who took this assessment</span>
                    <img src={image8} alt="Sheet" className="w-16 h-16 mr-2"/>
                    </div>

                    <ResponsiveContainer width="100%" height={300} className="mt-5">
                        <LineChart data={data}>
                          
                            <XAxis dataKey="percentile" />
                           
                            <Tooltip content={CustomTooltip}/>
                            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <ReferenceLine x={percentile} stroke="red" label={{ position: 'insideTopLeft', value: 'Your Percentile' }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
                        <h2 className="text-xl font-bold mb-4">Update Scores</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4 flex items-center">
                                <img src={image5} alt="Cup" className="w-8 h-8 mr-2"/>
                                <label className="block text-gray-700 mr-2">Update Your Rank</label>
                                <input type="text" name="rank" className="mt-1 p-2 ml-36  border border-gray-300 rounded-md" defaultValue={rank} />
                            </div>
                            <div className="mb-4 flex items-center">
                                <img src={image6} alt="Sheet" className="w-8 h-8 mr-2"/>
                                <label className="block text-gray-700 mr-2">Update Your Percentile</label>
                                <input type="text" name="percentile" className="mt-1 p-2 ml-28 border border-gray-300 rounded-md" defaultValue={percentile} />
                            </div>
                            <div className="mb-4 flex items-center">
                                <img src={image7} alt="Tick" className="w-8 h-8 mr-2"/>
                                <label className="block text-gray-700 mr-2">Update Your Current Score (out of 15)</label>
                                <input type="text" name="score" className="mt-1 p-2 ml-1 border border-gray-300 rounded-md" defaultValue={correctAnswers} />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2">Cancel</button>
                                <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded-md">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            </div>
            <div className='flex flex-col'>
            <div className="mt-5  border border-gray-200 rounded-lg  ml-10">
            <img src={image9} alt="Progress" className=''/>
            </div>
            <div className="mt-5 p-5 border border-gray-200 rounded-lg max-w-3xl ml-10">
            <div className='flex justify-between'>
            <span className='font-bold'>Question Analysis</span>
            <span className='text-blue-900 font-semibold'>{correctAnswers}/15</span>
            </div>
            <div className='mt-4 flex'>
            <span className='text-gray-500 font-bold'>You scored {correctAnswers} question correct out of 15.{correctAnswers===15?<span className='text-gray-500 font-bold'>Well Done</span>:<span className='text-gray-500 font-bold'>However it still needs some improvement</span>} </span>
            
            </div>
            <ResponsiveContainer width={300} height={300} className="mt-5">
                            <PieChart>
                                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
            </div>
            </div>

            </div>
            </div>
        </>
    );
}

export default SkillTest;
