using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Uniart.DataAccess.Migrations
{
    public partial class ServicioyComision : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ciudades_Paises_Pais_id",
                table: "Ciudades");

            migrationBuilder.DropForeignKey(
                name: "FK_Comisiones_Reviews_Review_id_ArtistaId",
                table: "Comisiones");

            migrationBuilder.DropForeignKey(
                name: "FK_Comisiones_Reviews_Review_id_ClienteId",
                table: "Comisiones");

            migrationBuilder.DropForeignKey(
                name: "FK_Comisiones_Servicios_Servicio_id",
                table: "Comisiones");

            migrationBuilder.DropForeignKey(
                name: "FK_Envios_Servicios_Ciudades_Ciudades_Ciudad_id",
                table: "Envios_Servicios_Ciudades");

            migrationBuilder.DropForeignKey(
                name: "FK_Envios_Servicios_Ciudades_Servicios_Servicio_id",
                table: "Envios_Servicios_Ciudades");

            migrationBuilder.DropForeignKey(
                name: "FK_Redes_Sociales_Artistas_Redes_Sociales_Red_social_id",
                table: "Redes_Sociales_Artistas");

            migrationBuilder.DropForeignKey(
                name: "FK_Redes_Sociales_Artistas_Usuarios_Artista_id",
                table: "Redes_Sociales_Artistas");

            migrationBuilder.DropForeignKey(
                name: "FK_Servicios_Usuarios_Artista_id",
                table: "Servicios");

            migrationBuilder.DropForeignKey(
                name: "FK_Servicios_Formatos_Formatos_Formato_id",
                table: "Servicios_Formatos");

            migrationBuilder.DropForeignKey(
                name: "FK_Servicios_Formatos_Servicios_Servicio_id",
                table: "Servicios_Formatos");

            migrationBuilder.DropForeignKey(
                name: "FK_Servicios_Temas_Servicios_Servicio_id",
                table: "Servicios_Temas");

            migrationBuilder.DropForeignKey(
                name: "FK_Servicios_Temas_Temas_Tema_id",
                table: "Servicios_Temas");

            migrationBuilder.DropForeignKey(
                name: "FK_Usuarios_Tarjetas_Tarjetas_Tarjeta_id",
                table: "Usuarios_Tarjetas");

            migrationBuilder.DropForeignKey(
                name: "FK_Usuarios_Tarjetas_Usuarios_Usuario_id",
                table: "Usuarios_Tarjetas");

            migrationBuilder.DropForeignKey(
                name: "FK_Valoraciones_Reviews_Review_id",
                table: "Valoraciones");

            migrationBuilder.DropForeignKey(
                name: "FK_Valoraciones_Usuarios_Usuario_id",
                table: "Valoraciones");

            migrationBuilder.DropForeignKey(
                name: "FK_Variacion_Detalles_Caracteristicas_Opciones_Caracteristica_Opciones_id",
                table: "Variacion_Detalles");

            migrationBuilder.DropForeignKey(
                name: "FK_Variacion_Detalles_Servicios_Variaciones_Servicio_Variacion_id",
                table: "Variacion_Detalles");

            migrationBuilder.DropTable(
                name: "Propuestas");

            migrationBuilder.DropIndex(
                name: "IX_Comisiones_Review_id_ArtistaId",
                table: "Comisiones");

            migrationBuilder.DropIndex(
                name: "IX_Comisiones_Review_id_ClienteId",
                table: "Comisiones");

            migrationBuilder.DropColumn(
                name: "Comision_id",
                table: "Servicios");

            migrationBuilder.DropColumn(
                name: "Review_id_ArtistaId",
                table: "Comisiones");

            migrationBuilder.DropColumn(
                name: "Review_id_ClienteId",
                table: "Comisiones");

            migrationBuilder.AddColumn<string>(
                name: "Descripcion",
                table: "Comisiones",
                type: "nvarchar(2000)",
                maxLength: 2000,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Review_Usuario_id",
                table: "Comisiones",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Servicio_Variacion_id",
                table: "Comisiones",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Usuario_id",
                table: "Comisiones",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Comisiones_Review_Usuario_id",
                table: "Comisiones",
                column: "Review_Usuario_id");

            migrationBuilder.CreateIndex(
                name: "IX_Comisiones_Servicio_Variacion_id",
                table: "Comisiones",
                column: "Servicio_Variacion_id");

            migrationBuilder.CreateIndex(
                name: "IX_Comisiones_Usuario_id",
                table: "Comisiones",
                column: "Usuario_id");

            migrationBuilder.AddForeignKey(
                name: "FK_Ciudades_Paises_Pais_id",
                table: "Ciudades",
                column: "Pais_id",
                principalTable: "Paises",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Comisiones_Reviews_Review_Usuario_id",
                table: "Comisiones",
                column: "Review_Usuario_id",
                principalTable: "Reviews",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Comisiones_Servicios_Servicio_id",
                table: "Comisiones",
                column: "Servicio_id",
                principalTable: "Servicios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Comisiones_Servicios_Variaciones_Servicio_Variacion_id",
                table: "Comisiones",
                column: "Servicio_Variacion_id",
                principalTable: "Servicios_Variaciones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Comisiones_Usuarios_Usuario_id",
                table: "Comisiones",
                column: "Usuario_id",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Envios_Servicios_Ciudades_Ciudades_Ciudad_id",
                table: "Envios_Servicios_Ciudades",
                column: "Ciudad_id",
                principalTable: "Ciudades",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Envios_Servicios_Ciudades_Servicios_Servicio_id",
                table: "Envios_Servicios_Ciudades",
                column: "Servicio_id",
                principalTable: "Servicios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Redes_Sociales_Artistas_Redes_Sociales_Red_social_id",
                table: "Redes_Sociales_Artistas",
                column: "Red_social_id",
                principalTable: "Redes_Sociales",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Redes_Sociales_Artistas_Usuarios_Artista_id",
                table: "Redes_Sociales_Artistas",
                column: "Artista_id",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Servicios_Usuarios_Artista_id",
                table: "Servicios",
                column: "Artista_id",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Servicios_Formatos_Formatos_Formato_id",
                table: "Servicios_Formatos",
                column: "Formato_id",
                principalTable: "Formatos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Servicios_Formatos_Servicios_Servicio_id",
                table: "Servicios_Formatos",
                column: "Servicio_id",
                principalTable: "Servicios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Servicios_Temas_Servicios_Servicio_id",
                table: "Servicios_Temas",
                column: "Servicio_id",
                principalTable: "Servicios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Servicios_Temas_Temas_Tema_id",
                table: "Servicios_Temas",
                column: "Tema_id",
                principalTable: "Temas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Usuarios_Tarjetas_Tarjetas_Tarjeta_id",
                table: "Usuarios_Tarjetas",
                column: "Tarjeta_id",
                principalTable: "Tarjetas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Usuarios_Tarjetas_Usuarios_Usuario_id",
                table: "Usuarios_Tarjetas",
                column: "Usuario_id",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Valoraciones_Reviews_Review_id",
                table: "Valoraciones",
                column: "Review_id",
                principalTable: "Reviews",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Valoraciones_Usuarios_Usuario_id",
                table: "Valoraciones",
                column: "Usuario_id",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Variacion_Detalles_Caracteristicas_Opciones_Caracteristica_Opciones_id",
                table: "Variacion_Detalles",
                column: "Caracteristica_Opciones_id",
                principalTable: "Caracteristicas_Opciones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Variacion_Detalles_Servicios_Variaciones_Servicio_Variacion_id",
                table: "Variacion_Detalles",
                column: "Servicio_Variacion_id",
                principalTable: "Servicios_Variaciones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ciudades_Paises_Pais_id",
                table: "Ciudades");

            migrationBuilder.DropForeignKey(
                name: "FK_Comisiones_Reviews_Review_Usuario_id",
                table: "Comisiones");

            migrationBuilder.DropForeignKey(
                name: "FK_Comisiones_Servicios_Servicio_id",
                table: "Comisiones");

            migrationBuilder.DropForeignKey(
                name: "FK_Comisiones_Servicios_Variaciones_Servicio_Variacion_id",
                table: "Comisiones");

            migrationBuilder.DropForeignKey(
                name: "FK_Comisiones_Usuarios_Usuario_id",
                table: "Comisiones");

            migrationBuilder.DropForeignKey(
                name: "FK_Envios_Servicios_Ciudades_Ciudades_Ciudad_id",
                table: "Envios_Servicios_Ciudades");

            migrationBuilder.DropForeignKey(
                name: "FK_Envios_Servicios_Ciudades_Servicios_Servicio_id",
                table: "Envios_Servicios_Ciudades");

            migrationBuilder.DropForeignKey(
                name: "FK_Redes_Sociales_Artistas_Redes_Sociales_Red_social_id",
                table: "Redes_Sociales_Artistas");

            migrationBuilder.DropForeignKey(
                name: "FK_Redes_Sociales_Artistas_Usuarios_Artista_id",
                table: "Redes_Sociales_Artistas");

            migrationBuilder.DropForeignKey(
                name: "FK_Servicios_Usuarios_Artista_id",
                table: "Servicios");

            migrationBuilder.DropForeignKey(
                name: "FK_Servicios_Formatos_Formatos_Formato_id",
                table: "Servicios_Formatos");

            migrationBuilder.DropForeignKey(
                name: "FK_Servicios_Formatos_Servicios_Servicio_id",
                table: "Servicios_Formatos");

            migrationBuilder.DropForeignKey(
                name: "FK_Servicios_Temas_Servicios_Servicio_id",
                table: "Servicios_Temas");

            migrationBuilder.DropForeignKey(
                name: "FK_Servicios_Temas_Temas_Tema_id",
                table: "Servicios_Temas");

            migrationBuilder.DropForeignKey(
                name: "FK_Usuarios_Tarjetas_Tarjetas_Tarjeta_id",
                table: "Usuarios_Tarjetas");

            migrationBuilder.DropForeignKey(
                name: "FK_Usuarios_Tarjetas_Usuarios_Usuario_id",
                table: "Usuarios_Tarjetas");

            migrationBuilder.DropForeignKey(
                name: "FK_Valoraciones_Reviews_Review_id",
                table: "Valoraciones");

            migrationBuilder.DropForeignKey(
                name: "FK_Valoraciones_Usuarios_Usuario_id",
                table: "Valoraciones");

            migrationBuilder.DropForeignKey(
                name: "FK_Variacion_Detalles_Caracteristicas_Opciones_Caracteristica_Opciones_id",
                table: "Variacion_Detalles");

            migrationBuilder.DropForeignKey(
                name: "FK_Variacion_Detalles_Servicios_Variaciones_Servicio_Variacion_id",
                table: "Variacion_Detalles");

            migrationBuilder.DropIndex(
                name: "IX_Comisiones_Review_Usuario_id",
                table: "Comisiones");

            migrationBuilder.DropIndex(
                name: "IX_Comisiones_Servicio_Variacion_id",
                table: "Comisiones");

            migrationBuilder.DropIndex(
                name: "IX_Comisiones_Usuario_id",
                table: "Comisiones");

            migrationBuilder.DropColumn(
                name: "Descripcion",
                table: "Comisiones");

            migrationBuilder.DropColumn(
                name: "Review_Usuario_id",
                table: "Comisiones");

            migrationBuilder.DropColumn(
                name: "Servicio_Variacion_id",
                table: "Comisiones");

            migrationBuilder.DropColumn(
                name: "Usuario_id",
                table: "Comisiones");

            migrationBuilder.AddColumn<int>(
                name: "Comision_id",
                table: "Servicios",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Review_id_ArtistaId",
                table: "Comisiones",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Review_id_ClienteId",
                table: "Comisiones",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Propuestas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Descripcion = table.Column<string>(type: "nvarchar(2000)", maxLength: 2000, nullable: false),
                    Fecha = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Servicio_Variacio_Id = table.Column<int>(type: "int", nullable: true),
                    Usuario_Id = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Propuestas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Propuestas_Servicios_Variaciones_Servicio_Variacio_Id",
                        column: x => x.Servicio_Variacio_Id,
                        principalTable: "Servicios_Variaciones",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Propuestas_Usuarios_Usuario_Id",
                        column: x => x.Usuario_Id,
                        principalTable: "Usuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Comisiones_Review_id_ArtistaId",
                table: "Comisiones",
                column: "Review_id_ArtistaId");

            migrationBuilder.CreateIndex(
                name: "IX_Comisiones_Review_id_ClienteId",
                table: "Comisiones",
                column: "Review_id_ClienteId");

            migrationBuilder.CreateIndex(
                name: "IX_Propuestas_Servicio_Variacio_Id",
                table: "Propuestas",
                column: "Servicio_Variacio_Id");

            migrationBuilder.CreateIndex(
                name: "IX_Propuestas_Usuario_Id",
                table: "Propuestas",
                column: "Usuario_Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Ciudades_Paises_Pais_id",
                table: "Ciudades",
                column: "Pais_id",
                principalTable: "Paises",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Comisiones_Reviews_Review_id_ArtistaId",
                table: "Comisiones",
                column: "Review_id_ArtistaId",
                principalTable: "Reviews",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Comisiones_Reviews_Review_id_ClienteId",
                table: "Comisiones",
                column: "Review_id_ClienteId",
                principalTable: "Reviews",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Comisiones_Servicios_Servicio_id",
                table: "Comisiones",
                column: "Servicio_id",
                principalTable: "Servicios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Envios_Servicios_Ciudades_Ciudades_Ciudad_id",
                table: "Envios_Servicios_Ciudades",
                column: "Ciudad_id",
                principalTable: "Ciudades",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Envios_Servicios_Ciudades_Servicios_Servicio_id",
                table: "Envios_Servicios_Ciudades",
                column: "Servicio_id",
                principalTable: "Servicios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Redes_Sociales_Artistas_Redes_Sociales_Red_social_id",
                table: "Redes_Sociales_Artistas",
                column: "Red_social_id",
                principalTable: "Redes_Sociales",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Redes_Sociales_Artistas_Usuarios_Artista_id",
                table: "Redes_Sociales_Artistas",
                column: "Artista_id",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Servicios_Usuarios_Artista_id",
                table: "Servicios",
                column: "Artista_id",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Servicios_Formatos_Formatos_Formato_id",
                table: "Servicios_Formatos",
                column: "Formato_id",
                principalTable: "Formatos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Servicios_Formatos_Servicios_Servicio_id",
                table: "Servicios_Formatos",
                column: "Servicio_id",
                principalTable: "Servicios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Servicios_Temas_Servicios_Servicio_id",
                table: "Servicios_Temas",
                column: "Servicio_id",
                principalTable: "Servicios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Servicios_Temas_Temas_Tema_id",
                table: "Servicios_Temas",
                column: "Tema_id",
                principalTable: "Temas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Usuarios_Tarjetas_Tarjetas_Tarjeta_id",
                table: "Usuarios_Tarjetas",
                column: "Tarjeta_id",
                principalTable: "Tarjetas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Usuarios_Tarjetas_Usuarios_Usuario_id",
                table: "Usuarios_Tarjetas",
                column: "Usuario_id",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Valoraciones_Reviews_Review_id",
                table: "Valoraciones",
                column: "Review_id",
                principalTable: "Reviews",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Valoraciones_Usuarios_Usuario_id",
                table: "Valoraciones",
                column: "Usuario_id",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Variacion_Detalles_Caracteristicas_Opciones_Caracteristica_Opciones_id",
                table: "Variacion_Detalles",
                column: "Caracteristica_Opciones_id",
                principalTable: "Caracteristicas_Opciones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Variacion_Detalles_Servicios_Variaciones_Servicio_Variacion_id",
                table: "Variacion_Detalles",
                column: "Servicio_Variacion_id",
                principalTable: "Servicios_Variaciones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
