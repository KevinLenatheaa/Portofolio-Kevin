const projectData = [
    {
        title: "Proyek 1",
        description: "Ini adalah deskripsi lengkap dari proyek 1. Proyek ini memberikan beberapa info film, dan anda juga bisa mencari beberapa film.",
        link: "https://kevinlenatheaa.github.io/Tugas-Bioskop/"
    },
    {
        title: "Proyek 2",
        description: "Ini adalah deskripsi lengkap dari proyek 2. Proyek ini merupakan tugas yang menceritakan hari liburan pada saat galungan kuningan.",
        link: "https://kevinlenatheaa.github.io/Liburan/"
    },
    {
        title: "Proyek 3",
        description: "Ini adalah deskripsi lengkap dari proyek 3. Proyek ini merupakan tugas yang di berikan untuk membuat scroll content.",
        link: "https://kevinlenatheaa.github.io/ARK-Survival/"
    },
    {
        title: "Proyek 4",
        description: "Ini adalah deskripsi lengkap dari proyek 4. Proyek ini merupakan tugas yang di berikan untuk membuat formulir pelanggaran pada siswa.",
        link: "https://kevinlenatheaa.github.io/FORMULIR-PELANGGARAN/"
    }
];

function showProjectDetail(projectIndex) {
    const project = projectData[projectIndex - 1];
    document.getElementById("project-title").innerText = project.title;
    document.getElementById("project-description").innerText = project.description;
    document.getElementById("project-link").setAttribute("href", project.link);

    document.getElementById("project-detail").style.display = "block";
}

function closeProjectDetail() {
    document.getElementById("project-detail").style.display = "none";
}
