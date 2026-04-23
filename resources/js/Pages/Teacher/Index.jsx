import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';

export default function Index ({ datas, groupData }) {
    const deleteTeacher = async (id) => {
        await router.delete(`/teacher/${id}`);        
    };
    return (
        <>                
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Siswa
                </h2>
            }
        >
            <Head title="Student" />            

            <div className='flex justify-start items-center px-3 pt-5'>
                <Link href={ route('teacher.create') } className='bg-gray-900 rounded-lg py-2 px-3 text-white'>
                    Create
                </Link>    
            </div>

            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                        <div class="overflow-x-auto">                        
                        <table class="min-w-full divide-y divide-gray-200 bg-white">
                            <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kelas</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">nama Guru</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>                                
                            </tr>
                            </thead>
                                <tbody class="divide-y divide-gray-200">
                                {groupData === null && (
                                    <div></div>
                                )}
                                {groupData.map((group) => 
                                    group.map((asa, index) => (                                                                            
                                        <tr className="hover:bg-gray-100 transition-colors" key={asa.id}>                                            
                                            {index === 0 && (
                                                <td 
                                                    rowSpan={group.length} 
                                                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 align-middle"
                                                >
                                                    {asa.grade.name}
                                                </td>
                                            )}
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {asa.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                                                <Link 
                                                    href={route('teacher.edit', asa.id)} 
                                                    className='py-2 px-3 bg-blue-500 rounded-xl'
                                                >
                                                    Edit
                                                </Link>
                                                <button 
                                                    onClick={() => deleteTeacher(asa.id)} 
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