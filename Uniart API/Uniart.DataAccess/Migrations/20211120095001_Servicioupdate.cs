using Microsoft.EntityFrameworkCore.Migrations;

namespace Uniart.DataAccess.Migrations
{
    public partial class Servicioupdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Servicios_Comisiones_comisionId",
                table: "Servicios");

            migrationBuilder.DropForeignKey(
                name: "FK_Servicios_Usuarios_Artista_Id",
                table: "Servicios");

            migrationBuilder.RenameColumn(
                name: "comisionId",
                table: "Servicios",
                newName: "ComisionId");

            migrationBuilder.RenameColumn(
                name: "Artista_Id",
                table: "Servicios",
                newName: "Artista_id");

            migrationBuilder.RenameIndex(
                name: "IX_Servicios_comisionId",
                table: "Servicios",
                newName: "IX_Servicios_ComisionId");

            migrationBuilder.RenameIndex(
                name: "IX_Servicios_Artista_Id",
                table: "Servicios",
                newName: "IX_Servicios_Artista_id");

            migrationBuilder.AlterColumn<int>(
                name: "Artista_id",
                table: "Servicios",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Servicios_Comisiones_ComisionId",
                table: "Servicios",
                column: "ComisionId",
                principalTable: "Comisiones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Servicios_Usuarios_Artista_id",
                table: "Servicios",
                column: "Artista_id",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Servicios_Comisiones_ComisionId",
                table: "Servicios");

            migrationBuilder.DropForeignKey(
                name: "FK_Servicios_Usuarios_Artista_id",
                table: "Servicios");

            migrationBuilder.RenameColumn(
                name: "ComisionId",
                table: "Servicios",
                newName: "comisionId");

            migrationBuilder.RenameColumn(
                name: "Artista_id",
                table: "Servicios",
                newName: "Artista_Id");

            migrationBuilder.RenameIndex(
                name: "IX_Servicios_ComisionId",
                table: "Servicios",
                newName: "IX_Servicios_comisionId");

            migrationBuilder.RenameIndex(
                name: "IX_Servicios_Artista_id",
                table: "Servicios",
                newName: "IX_Servicios_Artista_Id");

            migrationBuilder.AlterColumn<int>(
                name: "Artista_Id",
                table: "Servicios",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Servicios_Comisiones_comisionId",
                table: "Servicios",
                column: "comisionId",
                principalTable: "Comisiones",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Servicios_Usuarios_Artista_Id",
                table: "Servicios",
                column: "Artista_Id",
                principalTable: "Usuarios",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
