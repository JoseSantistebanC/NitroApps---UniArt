using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Uniart.Dto;
using Uniart.Services;

namespace UniArt.Api.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class Servicio_CaracteristicaController : ControllerBase
    {
        private readonly IServicio_CaracteristicaService _service;
        public Servicio_CaracteristicaController(IServicio_CaracteristicaService service)
        {
            _service = service;
        }
        [HttpGet]
        [AllowAnonymous]
        public async Task<IEnumerable<Servicio_CaracteristicaDto>> List([FromQuery] string filter)
        {
            return await _service.GetCollection(filter);
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("{id:int}")]
        public async Task<ResponseDto<Servicio_CaracteristicaDto>> Get(int id)
        {
            return await _service.Get(id);
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task Create([FromBody] Servicio_CaracteristicaDto request)
        {
            await _service.Create(request);

        }

        [HttpPut]
        [AllowAnonymous]
        public async Task<ActionResult<Servicio_CaracteristicaDto>> PutArtista(int id, [FromBody] Servicio_CaracteristicaDto request)
        {
            if (id != request.Id)
                return BadRequest();

            await _service.Update(request);
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        [AllowAnonymous]
        public async Task<ActionResult<Servicio_CaracteristicaDto>> Delete(int id)
        {
            var artistTodelete = _service.Get(id);
            if (artistTodelete == null)
                return NotFound();
            await _service.Delete(artistTodelete.Id);
            return NoContent();
        }

    }
}