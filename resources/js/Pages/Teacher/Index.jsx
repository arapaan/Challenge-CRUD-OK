import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';

export default function Index ({ datas, groupData }) {
    const deleteTeacher = async (id) => {
        await router.delete(`/teacher/${id}`);        
    };
    return (
        <>                
        <AuthenticatedLayout>           

            <div className='flex justify-start items-center px-3 pt-5'>
                <Link href={ route('teacher.create') } className='bg-gray-900 rounded-lg py-2 px-3 text-white'>
                    Create
                </Link>    
            </div>

            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                        <div className="overflow-x-auto">                        
                        <table className="min-w-full divide-y divide-gray-200 bg-white">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kelas</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">nama Guru</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>                                
                            </tr>
                            </thead>
                                <tbody className="divide-y divide-gray-200">
                                {groupData.map((group) => 
                                    group.map((t, index) => (                                                                            
                                        <tr className="hover:bg-gray-100 transition-colors" key={t.id}>                                            
                                            {index === 0 && (
                                                <td 
                                                    rowSpan={group.length} 
                                                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 align-middle"
                                                >
                                                    {t.grade.name}
                                                </td>
                                            )}
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {t.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                                                <Link 
                                                    href={route('teacher.edit', t.id)} 
                                                    className='py-2 px-3 bg-blue-500 rounded-xl'
                                                >
                                                    Edit
                                                </Link>
                                                <button 
                                                    onClick={() => deleteTeacher(t.id)} 
                                                    className='py-2 px-3 bg-red-600 rounded-xl'
                                                >
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>
                                    ))                                            
                                )}
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