using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Uniart.Dto;
using Uniart.Entities;
using Uniart.Services;

namespace UniArt.Api.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    
    public class ArtistaController : ControllerBase
    {
        private readonly IArtistaService _service;
        public ArtistaController(IArtistaService service)
        {
            _service = service;
        }
        [HttpGet]
        [AllowAnonymous]
        public async Task<IEnumerable<ArtistaDto>> List([FromQuery] string filter)
        {
            return await _service.GetCollection(filter);
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("{id:int}")]
        public async Task<Artista> Get(int id)
        {
            return await _service.GetArtista(id);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task Create([FromBody] ArtistaDto request)
        {
            await _service.Create(request);
            
        }

        [HttpPut]
       [Authorize]
        public async Task<ActionResult<ArtistaDto>> PutArtista(int id, [FromBody] ArtistaDto request)
        {
            if (id != request.Id)
                return BadRequest();

            await _service.Update(request);
            return NoContent();
        }

        [HttpDelete("{id:int}")]
       [Authorize]
        public async Task<ActionResult<ArtistaDto>> Delete(int id)
        {
            var artistTodelete = await _service.GetArtista(id);
            if (artistTodelete == null)
                return NotFound();
            await _service.Delete(id);//sql server = artistTodelete.Id , mysql = id
            return NoContent();
        }

    }
}
