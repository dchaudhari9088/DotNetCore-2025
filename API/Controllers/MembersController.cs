using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    //[Authorize]
   
    public class MembersController : BaseApiController
    {
        private readonly AppDbContext _dbContext;
        public MembersController(AppDbContext context)
        {
            _dbContext = context;

        }
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<AppUser>>> GetMembers()
        {
            var users = await _dbContext.Users.ToListAsync();
            return users;

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetOneMember([FromRoute] string id)
        {
            var user = await _dbContext.Users.FindAsync(id);

            if (user == null) return NotFound();
            return user;
        }
    }
}
