import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { data } from 'autoprefixer';
import { useMemo, useState } from 'react';

export default function Index ({ datas }) {
    const { flash } = usePage();  

    return (
        <>                
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Guru & Siswa
                </h2>
            }
        >
            <Head title="Combine" />            

            {/* {message && (
                <div className='flex justify-center items-center px-3 pt-5'>
                    {message}
                </div>
            )} */}


            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                        <div className="overflow-x-auto">                        
                        <table className="min-w-full divide-y divide-gray-200 bg-white">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kelas</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Siswa</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Guru</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">                            
                                {datas.map((data, index) => (                                
                                <tr className="hover:bg-gray-100 transition-colors" key={data.id}>                                            
                                    <>                                                                        
                                        <td 
                                            rowSpan={data.length} 
                                            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 align-middle"
                                        >
                                            {data.name}
                                        </td>
                                        <td>
                                            {data.students.map((s) => (
                                                <div className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {s.name}
                                                </div>
                                            ))}  
                                        </td>                                    
                                        <td>
                                            {data.teachers.map((t) => (
                                                <div className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-400">
                                                    {t.name}
                                                </div>                                                                                                                                
                                            ))}                                                                                  
                                        </td>
                                    </>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>        
        </>
    );
}