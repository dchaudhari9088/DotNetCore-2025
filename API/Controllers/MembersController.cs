using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")] //localhost:paort/api/Members
    [ApiController]
    public class MembersController : ControllerBase
    {
        private readonly AppDbContext _dbContext;
        public MembersController(AppDbContext context)
        {
            _dbContext = context;

        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<AppUser>>> GetMembers()
        {
            var users = await _dbContext.Users.ToListAsync();
            return users;

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetOneMember([FromRoute] string id)
        {
            var user =await _dbContext.Users.FindAsync(id);

            if (user == null) return NotFound();
            return user;
        }
    }
}
