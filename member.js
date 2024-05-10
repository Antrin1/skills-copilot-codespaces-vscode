function skillsMember() {
    var member = {
        name: 'Vasyl',
        age: 33,
        skills: ['Javascript', 'HTML', 'CSS']
    };

    return {
        getMember: function() {
            return member;
        },
        addSkill: function(skill) {
            member.skills.push(skill);
        }
    };
}