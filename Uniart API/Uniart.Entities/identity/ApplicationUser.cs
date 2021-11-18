﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Uniart.Entities.identity
{
    public class ApplicationUser : IdentityUser
    {
        public List<ApplicationUserRole> UserRoles { get; set; }
    }
}
